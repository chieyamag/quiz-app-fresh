<script lang="ts">
  import { page } from '$app/stores';
  import { scenarios } from '$lib/data/scenarios';
  import { get } from 'svelte/store';
  import { goto } from '$app/navigation';

  let input = '';
  let messages: string[] = [];

  const url = get(page).url;
  const selectedId = url.searchParams.get('char') ?? '';
  const scenario = scenarios.find((s) => s.id === selectedId);

  function sendMessage() {
    if (!input.trim()) return;
    
    const userMessage = input;
    messages = [...messages, `🧑 ${userMessage}`];
    input = '';

    // 仮のAI返信（OpenAIに接続しない）
    const dummyReply = '（AIは現在接続されていません）';
    messages = [...messages, `🤖 ${dummyReply}`];
  }

  function goBack() {
    goto('/roleplay');
  }
</script>

<div class="chat-wrapper">
  <h1 class="chat-title">会話スタート</h1>
  {#if scenario}
    <img src={scenario.icon} alt="キャラ" class="char-icon" />
    <h2 class="scenario-title">{scenario.title}</h2>
    <p class="scenario-meta">相手：{scenario.character}（{scenario.role}）</p>
    <p class="scenario-desc">{@html scenario.description}</p>
  {/if}

  <div class="chat-box">
    {#each messages as msg}
      <p class="chat-msg">💬 {msg}</p>
    {/each}
  </div>

  <div class="input-row">
    <input
      bind:value={input}
      placeholder="発言を入力..."
      class="chat-input"
      on:keydown={(e) => e.key === 'Enter' && sendMessage()}
    />
    <button on:click={sendMessage}>送信</button>
  </div>

  <button class="back-btn" on:click={goBack}>← シナリオ選択に戻る</button>
</div>

<style>
  .chat-wrapper {
    max-width: 768px;
    margin: 2rem auto;
    padding: 1rem;
    text-align: center;
  }

  .char-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 1rem auto;
  }

  .scenario-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.2rem;
  }

  .scenario-meta {
    color: #666;
    font-size: 0.95rem;
  }

  .scenario-desc {
    margin-bottom: 1rem;
    font-size: 0.95rem;
    color: #444;
  }

  .chat-box {
    border: 1px solid #ddd;
    border-radius: 10px;
    background: #f9f9f9;
    padding: 1rem;
    min-height: 200px;
    text-align: left;
    margin-bottom: 1rem;
  }

  .chat-msg {
    margin: 0.3rem 0;
  }

  .input-row {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }

  .chat-input {
    flex: 1;
    padding: 0.6rem;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  button {
    background-color: #007aff;
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }

  .back-btn {
    background-color: #ccc;
    color: #333;
    margin-top: 1rem;
  }
</style>
