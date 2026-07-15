type Props = {
  onExportJson: () => void;
  onExportCsv: () => void;
};

function ExportButtons({
  onExportJson,
  onExportCsv,
}: Props) {
  return (
    <div className="flex gap-2">

      <button
        onClick={onExportJson}
        className="bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        Exportar JSON
      </button>

      <button
        onClick={onExportCsv}
        className="bg-orange-600 text-white px-4 py-2 rounded-lg"
      >
        Exportar CSV
      </button>

    </div>
  );
}

export default ExportButtons;