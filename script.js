// Dados dos Serviços de Marketing
const servicos = [
    {
        titulo: "Gestão de Tráfego (Ads)",
        descricao: "Campanhas de alta performance no Google e Facebook. Otimização diária para reduzir custos e aumentar vendas.",
        imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        titulo: "Branding & Identidade",
        descricao: "Criação de marcas memoráveis. Do logotipo ao tom de voz, construímos uma imagem sólida e desejável.",
        imagem: "https://images.unsplash.com/photo-1493421419110-74f4e30dd694?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        titulo: "Inbound Marketing & SEO",
        descricao: "Conteúdo estratégico para colocar seu site no topo do Google e atrair clientes qualificados organicamente.",
        imagem: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        titulo: "Social Media Management",
        descricao: "Gestão completa de redes sociais. Design atraente, legendas persuasivas e engajamento com a comunidade.",
        imagem: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
];

// Função para renderizar os cards de serviço
function carregarServicos() {
    const container = document.getElementById('servicos-container');
    container.innerHTML = '';

    servicos.forEach(servico => {
        const card = document.createElement('div');
        card.classList.add('card-servico');

        card.innerHTML = `
            <div class="img-servico" style="background-image: url('${servico.imagem}')"></div>
            <div class="info-servico">
                <h3>${servico.titulo}</h3>
                <p>${servico.descricao}</p>
                <a href="#" class="btn-card" onclick="solicitarOrcamento('${servico.titulo}')">SAIBA MAIS →</a>
            </div>
        `;

        container.appendChild(card);
    });
}

function solicitarOrcamento(servico) {
    alert(`Ótima escolha! Vamos criar um plano de crescimento focado em: ${servico}.`);
}

// Inicialização
window.onload = carregarServicos;