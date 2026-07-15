import ExportButtons from "../ExportButtons/ExportButtons";

type Props = {
  search: string;
  setSearch: (value: string) => void;
  onRefresh: () => void;
  onExportJson: () => void;
  onExportCsv: () => void;
};

function FilterBar({
  search,
  setSearch,
  onRefresh,
  onExportJson,
  onExportCsv,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-3 justify-between items-center">

      <input
        className="border rounded-lg p-2 flex-1"
        placeholder="Buscar moeda..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex gap-2">

        <button
          onClick={onRefresh}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Atualizar
        </button>

        <ExportButtons
          onExportJson={onExportJson}
          onExportCsv={onExportCsv}
        />

      </div>

    </div>
  );
}

export default FilterBar;