<script lang="ts">
  import { goto } from '$app/navigation';

  function startGame() {
    goto('/roleplay');
  }
</script>

<main>
  <div class="header">
    <h1>AI会話トレーニングゲーム</h1>
    <p>管理職としてAIキャラと信頼関係を築き、課題を解決しよう！</p>
    <button on:click={startGame}>▶ ストーリー選択へ進む</button>
  </div>

  <section class="manual">
    <h2>📘 ゲームルール</h2>
    <img src="/manual1.png" alt="ゲーム概要" />
    <img src="/manual2.png" alt="操作説明" />
  </section>
</main>

<style>
  main {
    main {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding: 4rem;
  font-family: "Meiryo UI", sans-serif;
}

  }

  .header {
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 2rem;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    margin-bottom: 2rem;
    text-align: center;
  }

  h1 {
    font-size: 2.8rem;
    color: #002244;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 1.5rem;
  }

  button {
    font-size: 1.3rem;
    padding: 1rem 2.5rem;
    background-color: #007aff;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  button:hover {
    background-color: #005bb5;
    transform: scale(1.05);
  }

  .manual {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid #ccc;
  }

  .manual h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  .manual img {
    max-width: 100%;
    margin-bottom: 1rem;
    border-radius: 8px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.1);
  }
</style>
