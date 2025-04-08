<script lang="ts">
  import { goto } from '$app/navigation';
<<<<<<< HEAD
  import { scenarios } from '$lib/data/scenarios';
=======
  import { scenarios } from '$lib/data/scenarios'; // あなたが既に作っている想定
>>>>>>> 1677898 (新しい教習所クイズに差し替え)

  let selectedId = '';
  $: selected = scenarios.find((s) => s.id === selectedId);

<<<<<<< HEAD
  function scrollToTop() {
  goto('/');
}

=======
>>>>>>> 1677898 (新しい教習所クイズに差し替え)
  function startScenario() {
    if (selectedId) {
      goto(`/roleplay/chat?char=${selectedId}`);
    }
  }
</script>

<<<<<<< HEAD
<div class="wrapper">
  <h1 class="title">AI会話トレーニング</h1>
  <p class="subtitle">シナリオを選んで開始してください</p>

  <div class="story-list">
    {#each scenarios as s}
      <label class="story-box" class:active={selectedId === s.id}>
        <div class="story-row">
          <input type="radio" bind:group={selectedId} value={s.id} class="radio" />
          <div class="story-main">
            <h2 class="story-title">{s.title}</h2>
            <p class="story-meta">相手：{s.character}（{s.role}）</p>
            <p class="story-desc">{@html s.description ?? ''}</p>
          </div>
          <img src={s.icon} alt="キャラ" class="character-icon" />
        </div>
      </label>
    {/each}
  </div>

<!-- 中央に横並びボタン -->
<div class="button-row">
  <button class="back-to-top" on:click={scrollToTop}>
    ← TOPへ戻る
  </button>

  <button class="start-btn" on:click={startScenario} disabled={!selectedId}>
    会話スタート →
  </button>
</div>

</div>
<style>
  .wrapper {
    max-width: 768px;
    margin: 2rem auto;
    padding: 1rem;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", sans-serif;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #004080;
    margin-bottom: 0.3rem;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 1.5rem;
  }

  .story-list {
=======
<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }

  .scenarios {
    margin-top: 1rem;
>>>>>>> 1677898 (新しい教習所クイズに差し替え)
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

<<<<<<< HEAD
  .story-box {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 16px;
    padding: 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease;
  }

  .story-box:hover {
    border-color: #007aff;
    box-shadow: 0 4px 12px rgba(0, 122, 255, 0.1);
  }

  .story-box:has(input:checked) {
    background-color: #e6f2ff;
    border-color: #007aff;
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2);
  }

  .story-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-align: left;
  }

  .radio {
    transform: scale(1.3);
    accent-color: #007aff;
    margin-left: 0.8rem;
  }

  .story-main {
    flex: 1;
  }

  .story-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #004080;
    margin-bottom: 0.2rem;
  }

  .story-meta {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.3rem;
  }

  .story-desc {
    font-size: 0.85rem;
    color: #444;
    line-height: 1.5;
  }

  .character-icon {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #ccc;
    flex-shrink: 0;
  }

  .start-btn,
  .back-to-top {
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    min-width: 160px;
    text-align: center;
}

  
/* TOPへボタン用スタイル（色違い） */
.back-to-top {
  background-color: #007aff;
  color: white;
}

.back-to-top:hover {
  background-color: #005bb5;
  transform: translateY(-2px);
}

/* 会話スタートボタン */
.start-btn {
  background-color: #007aff;
  color: white;
}

.start-btn:hover {
  background-color: #005bb5;
  transform: scale(1.05);
}

.start-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.button-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.back-to-top {
  /* fixedレイアウト解除 */
  /* position: fixed; ← これは削除！ */
  padding: 0.9rem 1.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;
}

.back-to-top:hover {
  background-color: #005bb5;
  transform: translateY(-2px);
}

</style>
=======
  .radio-option {
    cursor: pointer;
    font-size: 1.2rem;
  }

  button {
    margin-top: 2rem;
    padding: 0.8rem 1.5rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 8px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }

  button:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
</style>

<div class="container">
  <h1>AI会話トレーニング</h1>
  <p>シナリオを選んで開始してください</p>

  <div class="scenarios">
    {#each scenarios as s}
      <label class="radio-option">
        <input type="radio" bind:group={selectedId} value={s.id} />
        {s.title}
      </label>
    {/each}
  </div>

  <button on:click={startScenario} disabled={!selectedId}>会話スタート</button>
</div>
>>>>>>> 1677898 (新しい教習所クイズに差し替え)
