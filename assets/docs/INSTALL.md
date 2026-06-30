# Instalação do Plugin Dados Falsos no Insomnia

## Pré-requisitos

- Insomnia 2021.7.0 ou superior
- Node.js 12+ (para desenvolvimento)

## Instalação Rápida

### 1. Compile o Projeto

```bash
npm install
npm run build
```

Isso vai gerar a pasta `dist/insomnia-plugin-dados-falsos/` com tudo pronto para o Insomnia.

### 2. Localize a Pasta de Plugins do Insomnia

**Linux/Mac:**
```bash
~/.config/Insomnia/plugins/
```

**Windows:**
```
%APPDATA%\Insomnia\plugins\
```

### 3. Copie a Pasta Compilada

**Linux/Mac:**
```bash
cp -r dist/insomnia-plugin-dados-falsos ~/.config/Insomnia/plugins/
```

**Windows (PowerShell):**
```powershell
Copy-Item -Path "dist/insomnia-plugin-dados-falsos" -Destination "$env:APPDATA\Insomnia\plugins\" -Recurse
```

### 4. Reinicie o Insomnia

Feche e abra o Insomnia novamente.

### 5. Verifique a Instalação

1. Vá em `Preferences > Plugins`
2. Procure por "Dados Falsos"
3. Você deve ver o plugin listado

## Usando o Plugin

Em qualquer campo de requisição, use os template tags:

```
{% nomeCompleto %}
{% cpf %}
{% email %}
{% telefone %}
```

Veja `README.md` para a lista completa de tags.

## Estrutura de Compilação

Após `npm run build`, a estrutura fica assim:

```
dist/insomnia-plugin-dados-falsos/
├── package.json              ← Metadados do plugin
├── src/
│   ├── main.js               ← Arquivo principal (carregado pelo Insomnia)
│   ├── types.js
│   ├── utils.js
│   ├── constants/
│   │   ├── names.js
│   │   ├── locations.js
│   │   ├── business.js
│   │   ├── enums.js
│   │   └── templateTags.js
│   └── generators/
│       ├── identity.js
│       ├── contact.js
│       ├── address.js
│       ├── company.js
│       ├── financial.js
│       ├── datetime.js
│       ├── identifiers.js
│       ├── content.js
│       ├── ecommerce.js
│       └── geo.js
└── (arquivos .d.ts e .map para desenvolvimento)
```

## Desenvolvimento

Se estiver desenvolvendo o plugin:

```bash
# Modo watch (recompila ao salvar)
npm run dev

# Testes
npm test

# Testes em watch mode
npm run test:watch
```

Após fazer mudanças:

1. Compile: `npm run build`
2. Reinicie o Insomnia
3. Teste os tags

## Troubleshooting

### Plugin não aparece em Preferences > Plugins

1. Verifique se compilou: `npm run build`
2. Verifique se `dist/insomnia-plugin-dados-falsos/package.json` existe
3. Verifique se `dist/insomnia-plugin-dados-falsos/src/main.js` existe
4. Reinicie o Insomnia completamente

### Erro ao usar template tags

1. Compile novamente: `npm run build`
2. Reinicie o Insomnia
3. Verifique a sintaxe: `{% nomeTag %}`

### "Module not found" error

1. Certifique-se de que compilou: `npm run build`
2. Verifique se todos os arquivos em `dist/insomnia-plugin-dados-falsos/src/` estão presentes
3. Verifique se o `package.json` tem `"main": "src/main.js"`

## Desinstalação

Para remover o plugin:

```bash
# Linux/Mac
rm -rf ~/.config/Insomnia/plugins/insomnia-plugin-dados-falsos

# Windows (PowerShell)
Remove-Item -Path "$env:APPDATA\Insomnia\plugins\insomnia-plugin-dados-falsos" -Recurse
```

Reinicie o Insomnia.

## Suporte

- Veja `README.md` para documentação de uso
- Veja `DEVELOPMENT.md` para desenvolvimento
- Veja `CONTRIBUTING.md` para contribuições
- Abra uma issue no GitHub para problemas
