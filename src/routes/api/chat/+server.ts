// src/routes/api/chat/+server.ts
<<<<<<< HEAD

import type { RequestHandler } from '@sveltejs/kit';

// 本番用APIキーがある場合は、下記を使って切り替えてもOK
// import { OPENAI_API_KEY } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
  const { message } = await request.json();

  // OpenAIなしのダミー応答
  const fakeReply = `「${message}」ですね。了解しました！（※現在はデモモードです）`;

  return new Response(JSON.stringify({ reply: fakeReply }));
=======
import type { RequestHandler } from '@sveltejs/kit';
import { OPENAI_API_KEY } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
  const { prompt, userMessage } = await request.json();

  const messages = [
    { role: 'system', content: prompt },
    { role: 'user', content: userMessage }
  ];

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0.7
    })
  });

  const data = await res.json();
  const reply = data.choices?.[0]?.message?.content ?? '…返答が取得できませんでした。';

  return new Response(JSON.stringify({ reply }), { status: 200 });
>>>>>>> 1677898 (新しい教習所クイズに差し替え)
};
