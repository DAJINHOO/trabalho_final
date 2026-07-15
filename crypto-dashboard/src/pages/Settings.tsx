function Settings() {
  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Configurações
      </h1>

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-semibold mb-4">
          Preferências
        </h2>

        <label className="block mb-2">
          Moeda de Exibição
        </label>

<select
  className="border rounded-lg p-2 w-64"
    defaultValue={localStorage.getItem("currency") || "usd"}
    onChange={(e) => {

        localStorage.setItem("currency", e.target.value);

    }}
>

  <option value="usd">USD</option>
  <option value="brl">BRL</option>
  <option value="eur">EUR</option>
</select>


      </div>

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-semibold mb-4">
          Atualização
        </h2>

        <p>
          Os dados podem ser atualizados manualmente pelo botão
          "Atualizar" presente no Dashboard.
        </p>

      </div>

    </div>
  );
}

export default Settings;