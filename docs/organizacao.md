# Inventário e limpeza - 02/10/2026

## Preservado

- src/ e configurações: implementação com alterações locais em andamento.
- package.json e package-lock.json: scripts e instalação reproduzível.
- .git/: histórico e alterações.
- AGENTS.md, CLAUDE.md e .claude/: instruções e configuração dos agentes.
- conteudo/: proposta, gerador, copy e exportações.
- output/pdf/: PDF entregue; ignorado pelo Git, preservado localmente.
- PDF, imagem e áudio originais: referências do cliente, não assets públicos.
- src/app/favicon.ico: ícone da aplicação; revisar adequação à marca antes da publicação.
- node_modules/ e .next/: dependências e cache preservados para continuidade.

Markdown e JSON são gerados a partir de mcm_copy.py e têm usos distintos: revisão humana e integração. src/lib/content.ts é utilizado em execução pelo site.

## Removido

- tmp/audio-deps/: dependências da transcrição concluída.
- tmp/pdfs/: renderizações, montagens e verificações de versões do PDF.
- tmp/transcribe_audio.py: script temporário; áudio original preservado.
- conteudo/__pycache__/: cache Python regenerável.
- Cinco SVGs padrão em public/: sem referências no projeto.
- docs/.gitkeep: marcador dispensável após criação de documentos.

## Movido

A transcrição tmp/audio-transcript.txt foi preservada em docs/audio-transcricao.txt. README e briefing foram atualizados.

## Pode ser removido depois

- .next/: cache regenerável; remover com processos do Next.js parados.
- node_modules/: reinstalável com npm ci; manter durante o desenvolvimento local.
- Referências originais: arquivar após revisão do cliente; ainda fundamentam decisões editoriais.

Não foram excluídos código, materiais originais, PDF final, histórico ou configuração local.