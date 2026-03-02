'use server';
/**
 * @fileOverview A Genkit flow to generate engaging event descriptions for club events.
 *
 * - generateEventDescription - A function that generates an event description using AI.
 * - GenerateEventDescriptionInput - The input type for the generateEventDescription function.
 * - GenerateEventDescriptionOutput - The return type for the generateEventDescription function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateEventDescriptionInputSchema = z.object({
  title: z.string().describe('The title of the event.'),
  date: z.string().describe('The date of the event (e.g., "October 26, 2024").'),
  time: z.string().describe('The time of the event (e.g., "2:00 PM - 4:00 PM").'),
  location: z.string().describe('The location where the event will take place.'),
  shortDescription: z.string().describe('A brief, factual overview of the event content.'),
  targetAudience: z.string().describe('Who is the event primarily designed for?'),
  benefits: z.array(z.string()).describe('A list of key benefits attendees will gain from the event.'),
});
export type GenerateEventDescriptionInput = z.infer<typeof GenerateEventDescriptionInputSchema>;

const GenerateEventDescriptionOutputSchema = z.object({
  description: z.string().describe('A concise and engaging event description.'),
});
export type GenerateEventDescriptionOutput = z.infer<typeof GenerateEventDescriptionOutputSchema>;

const generateEventDescriptionPrompt = ai.definePrompt({
  name: 'generateEventDescriptionPrompt',
  input: { schema: GenerateEventDescriptionInputSchema },
  output: { schema: GenerateEventDescriptionOutputSchema },
  prompt: `You are an expert copywriter for a university club named SQAT, whose mission is "Empowering Future Developers". Your task is to craft a concise and engaging event description based on the provided details.

The description should:
- Be between 3-5 sentences long.
- Attract university students and highlight the key benefits.
- Emphasize the value proposition for attendees.
- Include a subtle call to action encouraging participation, without being overly pushy.

Event Details:
Title: {{{title}}}
Date: {{{date}}}
Time: {{{time}}}
Location: {{{location}}}
Brief Overview: {{{shortDescription}}}
Target Audience: {{{targetAudience}}}
Key Benefits:
{{#each benefits}}- {{{this}}}
{{/each}}`,
});

const generateEventDescriptionFlow = ai.defineFlow(
  {
    name: 'generateEventDescriptionFlow',
    inputSchema: GenerateEventDescriptionInputSchema,
    outputSchema: GenerateEventDescriptionOutputSchema,
  },
  async (input) => {
    const { output } = await generateEventDescriptionPrompt(input);
    if (!output) {
      throw new Error('Failed to generate event description.');
    }
    return output;
  }
);

export async function generateEventDescription(
  input: GenerateEventDescriptionInput
): Promise<GenerateEventDescriptionOutput> {
  return generateEventDescriptionFlow(input);
}
