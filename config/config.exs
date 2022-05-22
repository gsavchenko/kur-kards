# This file is responsible for configuring your umbrella
# and **all applications** and their dependencies with the
# help of Mix.Config.
#
# Note that all applications in your umbrella share the
# same configuration and dependencies, which is why they
# all use the same configuration file. If you want different
# configurations or dependencies per app, it is best to
# move said applications out of the umbrella.
use Mix.Config

# Configure Mix tasks and generators
config :kur_kards,
  ecto_repos: [KurKards.Repo]

config :kur_kards_web,
  ecto_repos: [KurKards.Repo],
  generators: [context_app: :kur_kards]

# Configures the endpoint
config :kur_kards_web, KurKardsWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "I3ZZg7Ti5+K93yndD0RD6YOlJSVqAkP0IlneW1uykIThzk6x/8+y8aUJZBsCeto0",
  render_errors: [view: KurKardsWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: KurKards.PubSub,
  live_view: [signing_salt: "78wOgAzz"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
