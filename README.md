# Before You Begin
This guide assumes that you have setup the following:

- Elixir (1.12.1), which means you’ll also need
- Erlang (23.0.2)
- npm (@6.14.5)
- git (not really required but you’ll want to anyway)
- Docker Compose (for running PostgreSQL)

For a more detailed setup guide please see the following [documentation](https://docs.google.com/document/d/1YnArtNuoQyMtIzhVJmdP73oqGcz8S-LJa3JLZI9J55o/edit#).
# KurKards.Umbrella
The two Elixir apps are /apps/kur_kards and apps/kur_kards_web.

Each app will have its own dependency configuration, though the entire umbrella project will have a shared dependency library (in /deps) for all apps.

All child apps also share the same root configuration in the /config folder.

We start with an umbrella app because it makes it easier to organize code as the application gets bigger and more complex. Besides, we’ve found that it’s easier to refactor an umbrella app project to a single app project than it is to go the other way around.

## To start the server
```
mix phx.server
```
You should see the application running at `localhost:4000`

# kur-kards
In kur_kards_web lives our react application. Be sure to run `yarn install` here before starting development.