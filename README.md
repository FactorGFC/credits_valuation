# Analisis de Créditos por Factor Global GFC

[![Ruby](/Users/vponce/Downloads/rails6.jpeg)]()

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Introducción
Aplicación que permite la captación, validación y valuación de clientes que necesiten solicitar algún tipo de crédito que es ofertado por Factor Global GFC.

Enlace disponible en:
- https://analisisfg.com/

## Tecnologías

Información de lenguajes y tecnologías utilizadas:

- [Ruby] - HTML enhanced for web apps!
-
##### Prerequisitos

Para configuración inicila se espera las siguientes herramientas instaladas en el sistema.

- Github
- rvm [rvm](https://rvm.io/rvm/install)
- Ruby [2.7.5](https://www.ruby-lang.org/en/news/2021/11/24/ruby-2-7-5-released/)
- Rails [6.1.5](https://rubyonrails.org/2022/3/10/Rails-6-1-5-has-been-released)


#### Ejecución inicial del Proyecto

##### 1. Repositorio
Clonar proyecto

```bash
git clone git@gitlab.com:victormponcem/credits_factor_global.git
```
```sh
cd credits_factor_global
rvm use ruby-2.7.6@credits_factor_global
```

##### 2. Crear archivo application.yml

Editar la configuración del archivo application.yml administrado por figaro
```bash
cp config/application.yml
```

##### 3. Crear BD

Crear la BD de pruebas

```ruby
rake db:create RAILS_ENV=development
rake db:setup RAILS_ENV=development
```

##### 4. Migraciones

Es necesario correr las migraciones contenidas en la aplicacion

```ruby
rake db:migrate RAILS_ENV=development
```
##### 5. Seeds

La plataforma cuenta con datos iniciales requeridos para permisos, perfiles y roles.

```ruby
rake db:seed RAILS_ENV=development
```

##### 6. Iniciar el servidor

Puedes iniciar la aplicación con el siguiente comando:

```ruby
rails s
```
El sitio se encuentra accesible de manera lolcal en:

```sh
http://localhost:3000
```

## Gemas en Uso

La aplicación utiliza una serie de gemas para su desarrollo, dentro de las cuales se describen a continuación:

| GEMA | Descripción|PROYECTO |
| ------ |------ | ------ |
| GitHub | Repositorio|[https://github.com/FactorGFC/credits_valuation][PlGh] |
| DEVISE | Autenticación basada en Warden|[https://github.com/heartcombo/devise][PlDb] |

```Instalación WickedPDF
https://gist.github.com/paulsturgess/cfe1a59c7c03f1504c879d45787699f5
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[PlDb]: <https://github.com/heartcombo/devise>
[PlGh]: <git@github.com:FactorGFC/credits_valuation.git>


