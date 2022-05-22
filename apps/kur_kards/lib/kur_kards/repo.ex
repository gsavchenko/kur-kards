defmodule KurKards.Repo do
  use Ecto.Repo,
    otp_app: :kur_kards,
    adapter: Ecto.Adapters.Postgres
end
