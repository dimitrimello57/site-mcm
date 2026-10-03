# Pré-cadastro de contato

A página reúne seleção do interesse e formulário em um único bloco. Solicita nome e WhatsApp; e-mail e mensagem são opcionais. Links de serviços preservam a solução escolhida. Trocar de frente remove uma solução incompatível.

O navegador envia para `/api/contato`. O servidor valida os campos e encaminha um POST JSON ao endereço privado `CONTACT_WEBHOOK_URL`, que pode ser um webhook do CRM ou um fluxo de integração. Esse endereço nunca é exposto ao navegador.

Campos encaminhados: `nome`, `telefone`, `email`, `assunto` (`seguros`, `partners`, `capital` ou `nao-sei`), `mensagem`, `solucao` (identificador válido compatível com a frente, ou null), `origem` (`site-mcm`) e `enviadoEm` (data ISO).

A integração deve persistir o lead no CRM e devolver um código HTTP de sucesso apenas quando o recebimento estiver confirmado. Só então a interface apresenta confirmação e a opção de continuar pelo WhatsApp. Sem destino configurado ou com falha de entrega, não há confirmação de cadastro; a interface preserva os campos para nova tentativa.

Pendente: identificar o CRM utilizado e configurar o webhook real, seu mapeamento de campos e eventual autenticação exigida pelo fornecedor. Nenhum CRM externo foi configurado nesta alteração.
