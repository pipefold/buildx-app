"use client";
import {
  OutputsWorker,
  useAnalysisData,
  useOrderListData,
  useSuspendAllBuildData,
} from "@opensystemslab/buildx-core";
import css from "./app.module.css";
import CarbonEmissionsChart from "./ui/CarbonEmissionsChart";
import ChassisCostChart from "./ui/ChassisCostChart";
import FloorAreaChart from "./ui/FloorAreaChart";
import HousesPillsSelector, {
  useSelectedHouseIds,
} from "./ui/HousePillsSelector";

const AnalyseIndex = () => {
  useSuspendAllBuildData();

  new OutputsWorker();

  const { orderListRows } = useOrderListData();
  const analysisData = useAnalysisData();

  const selectedHouseIds = useSelectedHouseIds();

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex-grow-0">
        <HousesPillsSelector />
      </div>
      <div className="flex-auto">
        <div className={css.pageRoot}>
          <ChassisCostChart
            selectedHouseIds={selectedHouseIds}
            orderListRows={orderListRows}
          />
          <FloorAreaChart
            selectedHouseIds={selectedHouseIds}
            analyseData={analysisData}
          />
          <CarbonEmissionsChart
            selectedHouseIds={selectedHouseIds}
            analysisData={analysisData}
          />
        </div>
      </div>
    </div>
  );
};

export default AnalyseIndex;
