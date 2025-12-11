# Configuração de SMTP para Envio de Emails

## Visão Geral
O formulário de contato foi configurado para enviar emails usando SMTP. Quando um usuário preenche o formulário, dois emails são enviados:
1. **Email para o cliente**: Confirmação de recebimento da solicitação
2. **Email para o administrador**: Detalhes completos do contato (para cristiane@contabconfianca.com.br)

## Instalação de Dependências

As dependências necessárias já foram adicionadas ao `package.json`:
- `nodemailer`: ^6.9.7
- `@types/nodemailer`: ^6.4.14

Para instalar, execute:
```bash
npm install
# ou
pnpm install
# ou
yarn install
```

## Configuração de Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
SMTP_HOST=smtp.seu-provedor.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-email@dominio.com
SMTP_PASSWORD=sua-senha-ou-token
SMTP_FROM=seu-email@dominio.com
```

### Explicação das Variáveis:

- **SMTP_HOST**: Endereço do servidor SMTP do seu provedor de email
- **SMTP_PORT**: Porta do servidor SMTP (geralmente 587 para TLS, 465 para SSL)
- **SMTP_SECURE**: `true` para SSL/TLS (porta 465), `false` para STARTTLS (porta 587)
- **SMTP_USER**: Seu email ou usuário para autenticação
- **SMTP_PASSWORD**: Sua senha ou token de acesso
- **SMTP_FROM**: Email que aparecerá como remetente dos emails

## Exemplos de Configuração por Provedor

### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-email@gmail.com
SMTP_PASSWORD=sua-senha-de-app-gmail
SMTP_FROM=seu-email@gmail.com
```
> **Nota**: Use a senha de aplicativo gerada em: https://myaccount.google.com/apppasswords

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-email@outlook.com
SMTP_PASSWORD=sua-senha
SMTP_FROM=seu-email@outlook.com
```

### Domínio Customizado (cPanel, etc)
```env
SMTP_HOST=mail.seu-dominio.com.br
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-email@seu-dominio.com.br
SMTP_PASSWORD=sua-senha
SMTP_FROM=seu-email@seu-dominio.com.br
```

## Arquivos Modificados/Criados

### Novos Arquivos:
1. `/app/api/send-email/route.ts` - API route para processar o envio de emails

### Arquivos Modificados:
1. `/app/components/contact.tsx` - Atualizado para usar a API de SMTP
2. `/package.json` - Adicionadas dependências necessárias
3. `/.env.local.example` - Arquivo de referência com variáveis necessárias

## Como Funciona

1. **Usuário preenche o formulário** de contato
2. **Frontend envia um POST** para `/api/send-email` com os dados
3. **API route** valida os dados e conecta-se ao servidor SMTP
4. **Dois emails são enviados**:
   - Um para o cliente com confirmação
   - Um para cristiane@contabconfianca.com.br com os detalhes
5. **Resposta visual** é exibida ao usuário (sucesso ou erro)

## Segurança

- ✅ Validação de todos os campos obrigatórios
- ✅ Mensagens de erro genéricas ao usuário (informações sensíveis não são expostas)
- ✅ Logs de erro no console do servidor para debugging
- ✅ Variáveis de ambiente não são expostas ao cliente
- ✅ Proteção contra CSRF integrada no Next.js

## Testando a Configuração

1. Certifique-se de que a variável `SMTP_HOST` está correta
2. Verifique a porta SMTP correta para seu provedor
3. Teste o envio preenchendo o formulário
4. Verifique a pasta de spam/lixo se não receber o email

## Solução de Problemas

### "Error: connect ENOTFOUND smtp.seu-provedor.com"
- Verifique o `SMTP_HOST` (pode estar incorreto ou o servidor está indisponível)
- Certifique-se que pode acessar a internet

### "Error: Invalid login"
- Verifique `SMTP_USER` e `SMTP_PASSWORD`
- Alguns provedores requerem "senhas de aplicativo" especiais

### "Error: self signed certificate"
- Se tiver um certificado SSL auto-assinado, configure as opções do nodemailer
- Contacte seu provedor de email

### Emails chegando na pasta de SPAM
- Verifique o `SMTP_FROM` está correto
- Configure registros SPF, DKIM e DMARC no seu domínio
- Adicione a Confiança à sua lista de contatos aprovados

## Próximos Passos

1. Configure as variáveis de ambiente `.env.local`
2. Instale as dependências: `npm install`
3. Teste o formulário em desenvolvimento: `npm run dev`
4. Verifique o console do servidor para erros
5. Copie a configuração para o ambiente de produção (variáveis de ambiente seguras)
