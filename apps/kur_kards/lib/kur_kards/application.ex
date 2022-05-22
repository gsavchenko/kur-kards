defmodule KurKards.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      KurKards.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: KurKards.PubSub}
      # Start a worker by calling: KurKards.Worker.start_link(arg)
      # {KurKards.Worker, arg}
    ]

    Supervisor.start_link(children, strategy: :one_for_one, name: KurKards.Supervisor)
  end
end
