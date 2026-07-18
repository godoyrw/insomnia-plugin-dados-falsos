# Instalação — Dados Falsos

## Instalação via NPM no Insomnia (Recomendado)

No Insomnia: **Preferences → Plugins → Install Plugin** e digite:

```
insomnia-plugin-dados-falsos
```

O Insomnia baixa e instala automaticamente. Reinicie o Insomnia e confirme em **Preferences → Plugins**.

---

## Instalação Local (Desenvolvimento)

### Pré-requisitos

- Node.js 18+
- Insomnia 2021.7.0+

### Passo a passo

**1. Clone o repositório**

```bash
git clone https://github.com/godoyrw/insomnia-plugin-dados-falsos.git
cd insomnia-plugin-dados-falsos
```

**2. Instale as dependências e compile**

```bash
npm install
npm run build
```

**3. Localize a pasta de plugins do Insomnia**

| Sistema | Caminho |
|---|---|
| Linux / Mac | `~/.config/Insomnia/plugins/` |
| Windows | `%APPDATA%\Insomnia\plugins\` |

**4. Copie o plugin compilado**

```bash
# Linux / Mac
cp -r dist/insomnia-plugin-dados-falsos ~/.config/Insomnia/plugins/

# Windows (PowerShell)
Copy-Item -Path "dist/insomnia-plugin-dados-falsos" -Destination "$env:APPDATA\Insomnia\plugins\" -Recurse
```

**5. Reinicie o Insomnia** e confirme em **Preferences → Plugins**.

---

## Usando o Plugin

Em qualquer campo de requisição use a sintaxe de template tag:

```
{% cpf %}
{% cnpj %}
{% nomeCompleto %}
{% email %}
{% uuid %}
```

Veja o `README.md` para a lista completa de 88 tags.

---

## Estrutura após o build

```
dist/insomnia-plugin-dados-falsos/
├── package.json
└── src/
    ├── main.js
    ├── types.js
    ├── utils.js
    ├── constants/
    │   ├── names.js
    │   ├── locations.js
    │   ├── business.js
    │   ├── enums.js
    │   ├── countries.js
    │   └── templateTags.js
    └── generators/
        ├── identity.js
        ├── cpf.js
        ├── cnpj.js
        ├── cnh.js
        ├── rg.js
        ├── pis.js
        ├── cns.js
        ├── vehicle.js
        ├── contact.js
        ├── address.js
        ├── company.js
        ├── financial.js
        ├── datetime.js
        ├── identifiers.js
        ├── content.js
        ├── ecommerce.js
        ├── geo.js
        ├── countries.js
        ├── bloodType.js
        ├── healthPlan.js
        ├── allergy.js
        ├── medicalRecordNumber.js
        ├── professionalRegistration.js
        ├── education.js
        └── bancario.js
```

---

## Desinstalação

```bash
# Linux / Mac
rm -rf ~/.config/Insomnia/plugins/insomnia-plugin-dados-falsos

# Windows (PowerShell)
Remove-Item -Path "$env:APPDATA\Insomnia\plugins\insomnia-plugin-dados-falsos" -Recurse
```

Reinicie o Insomnia.

---

## Troubleshooting

**Plugin não aparece em Preferences → Plugins**
- Verifique se o build foi executado: `npm run build`
- Verifique se `dist/insomnia-plugin-dados-falsos/src/main.js` existe
- Reinicie o Insomnia completamente

**Erro ao usar template tags**
- Recompile: `npm run build`
- Verifique a sintaxe: `{% nomeTag %}`

**"Module not found"**
- Execute `npm run build` e verifique se todos os arquivos em `dist/` estão presentes

---

Veja também: `README.md` · `DEVELOPMENT.md` · `CONTRIBUTING.md`
