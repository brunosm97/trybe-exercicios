# Afinal, o que é GitHub?

Sabemos que o  **GitHub**  é uma plataforma de hospedagem de código, mas o que isso significa em termos práticos? O GitHub possibilita a você que salve e gerencie arquivos de código de maneira remota e que acesse o código de outras pessoas, além de permitir a outras pessoas que acessem seu código. Tudo isso é feito utilizando o  **Git**  como sistema de versionamento.

> **Anote aí 📝**: Não podemos esquecer que o Git é um sistema de versionamento de código, e o GitHub é uma plataforma que hospeda esse código. Para enviar ou acessar informações na plataforma do GitHub, são utilizados os comandos do Git.

Além disso, o GitHub possui ferramentas para auxiliar no trabalho em grupo e manter a qualidade do código, como o  _Code Review_  (revisão de código, em português). Isso significa dizer que os times conseguem revisar um código antes de realizar o  _merge_.

> **De olho na dica 👀**: No decorrer de sua trajetória em desenvolvimento, você pode se deparar com a seguinte frase: “Faz um CR?”. O  **_CR_**  significa  **_C_**ode  **_R_**eview.

O GitHub não é a única plataforma de hospedagem de código. Você também pode entrar em contato com  _GitLab_,  _BitBucket_  etc.

## Baixando repositórios com o  `git clone`

Para clonar, isto é, baixar um repositório em seu computador, você deve utilizar o comando  `git clone url-do-repositorio`. Esse comando faz com que o repositório, que está remoto, fique acessível localmente e já versionado.

> **Anote aí 📝**: Para criar ou clonar um repositório no GitHub e deixá-lo acessível no computador,  **não**  é necessário utilizar o comando  `git init`.

Com o  `git clone`, mais do que baixar o código atual, você consegue ter uma cópia de quase todos os dados que o servidor possui. Além disso, cada versão de cada arquivo é obtida ao utilizar esse comando.

