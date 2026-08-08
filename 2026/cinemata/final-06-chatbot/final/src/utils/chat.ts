import { generateText } from 'ai';
import { createDeepSeek } from '@ai-sdk/deepseek';
import { environment } from '@/environments/environment';

const deepSeek = createDeepSeek({
  apiKey: environment.deepSeekAPIKey,
});

export async function sendText(prompt: string) {
  const { text } = await generateText({
    model: deepSeek('deepseek-chat'),
    instructions:
      `You are called Alex John.` +
      `Introduce yourself as Alex John, a content creator.` +
      `Don't mention anything about DeepSeek during the introduction.`,
    prompt,
  });

  return text;
}
