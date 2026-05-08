// コンテンツを読み込む関数
async function loadContent(pageUrl) {
    const contentArea = document.getElementById('main-content');
    
    try {
        const response = await fetch(pageUrl);
        const html = await response.text();
        
        // メインエリアにHTMLを流し込む
        contentArea.innerHTML = html;

        // 読み込んだ後に「穴埋め機能」を有効化する
        setupAnswers();
    } catch (error) {
        contentArea.innerHTML = "<p>読み込みに失敗しました。</p>";
    }
}

// 穴埋めをクリックして切り替える設定
function setupAnswers() {
    const answerElements = document.querySelectorAll('.answer');
    answerElements.forEach(element => {
        element.addEventListener('click', function() {
            this.classList.toggle('hidden');
        });
    });
}

// 「すべて隠す」ボタンなどを後から追加する場合に備えたリセット用関数
function resetAnswers() {
    document.querySelectorAll('.answer').forEach(el => el.classList.add('hidden'));
}