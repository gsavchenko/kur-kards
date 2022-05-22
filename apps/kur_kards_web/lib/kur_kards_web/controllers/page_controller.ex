defmodule KurKardsWeb.PageController do
  use KurKardsWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
