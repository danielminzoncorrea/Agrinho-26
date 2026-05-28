const mensagens = [

    "🌿 Plantar árvores ajuda a proteger os rios e melhorar o ar.",

    "💧 Economizar água é essencial para a agricultura sustentável.",

    "🚜 A tecnologia no campo reduz desperdícios e aumenta a produção.",

    "🌎 Preservar o meio ambiente garante um futuro melhor para todos.",

    "🐝 As abelhas são fundamentais para a produção de alimentos."

];

function mostrarMensagem(){

    const numero = Math.floor(Math.random() * mensagens.length);

    document.getElementById("mensagem").innerHTML = mensagens[numero];

}
