defmodule Its.Repo do
  use Ecto.Repo,
    otp_app: :its,
    adapter: Ecto.Adapters.Postgres
end
