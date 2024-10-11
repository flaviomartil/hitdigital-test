English Version

Getting Started
---------------

To get started with this project, follow these steps:

1.  ### Create a .env file

    Copy the .env.example file to a new file named .env.
2.  ### Run Docker Compose

    In the root directory, run the following command:

        docker-compose up -d --build

    If you encounter any errors during the installation process, follow the troubleshooting steps below.

Troubleshooting
---------------

If you encounter an error during the installation process, access the Docker container using the following command:

    docker exec -it hitdigital_silverstripe_1 /bin/bash

Then, run the following commands to set the correct permissions:

    chown -R www-data /var/www/html/public chown -R www-data /var/www/html/.graphql-generated

Note: These commands should already be included in the Dockerfile, but it's always a good idea to double-check.

Install Composer Dependencies
-----------------------------

Run the following command inside the container:

    composer install

Exit the container and access the Silverstripe installation at:

    silverstripe.flaviomartil.tech/dev/build

Login and Edit the AboutUs Page
-------------------------------

Access the Silverstripe admin panel at:

    silverstripe.flaviomartil.tech/admin

Log in with the username and password provided in the email. Edit the AboutUs page as desired.

**Note:** Any changes made to the page will be reflected on the `hitdigital.flaviomaril.tech` site. You can add tables, images, and styles, and the site will remain responsive.

Portuguese Version

Iniciando
---------

Para iniciar este projeto, siga os seguintes passos:

1.  ### Crie um arquivo .env

    Copie o arquivo .env.example para um novo arquivo chamado .env.
2.  ### Execute o Docker Compose

    No diretório raiz, execute o seguinte comando:

        docker-compose up -d --build

    Se você encontrar algum erro durante o processo de instalação, siga os passos de solução de problemas abaixo.

Solução de Problemas
--------------------

Se você encontrar um erro durante o processo de instalação, acesse o container Docker usando o seguinte comando:

    docker exec -it hitdigital_silverstripe_1 /bin/bash

Em seguida, execute os seguintes comandos para definir as permissões corretas:

    chown -R www-data /var/www/html/public chown -R www-data /var/www/html/.graphql-generated

Nota: Esses comandos já devem estar incluídos no Dockerfile, mas é sempre uma boa ideia verificar.

Instale as Dependências do Composer
-----------------------------------

Execute o seguinte comando dentro do container:

    composer install

Saia do container e acesse a instalação do Silverstripe em:

    silverstripe.flaviomartil.tech/dev/build

Faça Login e Edite a Página AboutUs
-----------------------------------

Acesse o painel de administração do Silverstripe em:

    silverstripe.flaviomartil.tech/admin

Faça login com o nome de usuário e senha fornecidos no e-mail. Edite a página AboutUs como desejar.

**Nota:** Qualquer alteração feita na página será refletida no site `hitdigital.flaviomaril.tech`. Você pode adicionar tabelas, imagens e estilizações, e o site permanecerá responsivo.

You can copy and paste this HTML code into your README.md file. Let me know if you need any further changes! Share New# hitdigital-test
# hitdigital-test
