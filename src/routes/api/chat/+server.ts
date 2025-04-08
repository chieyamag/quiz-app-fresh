// src/routes/api/chat/+server.ts

import type { RequestHandler } from '@sveltejs/kit';

// 本番用APIキーがある場合は、下記を使って切り替えてもOK
// import { OPENAI_API_KEY } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
  const { message } = await request.json();

  // OpenAIなしのダミー応答
  const fakeReply = `「${message}」ですね。了解しました！（※現在はデモモードです）`;

  return new Response(JSON.stringify({ reply: fakeReply }));
};
