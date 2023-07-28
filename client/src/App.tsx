import React, { useEffect, useState } from "react";
import { obtainToken } from "./services/auth";
import { getBonuses } from "./services/bonuses";
import { GetBonusesResponse } from "./services/types";

function App() {
  const [{ isAuth, token, bonuses, loading }, setState] = useState<{
    isAuth: boolean;
    token: string | null;
    bonuses: GetBonusesResponse["data"] | null;
    loading: boolean;
  }>({
    isAuth: false,
    token: null,
    bonuses: null,
    loading: false,
  });

  useEffect(() => {
    (async function () {
      try {
        setState((prev) => ({
          ...prev,
          loading: true,
        }));
        const data = await obtainToken();
        setState((prev) => ({
          ...prev,
          isAuth: true,
          token: data.accessToken,
        }));
      } catch (error) {
        console.error(error);
      } finally {
        setState((prev) => ({
          ...prev,
          loading: false,
        }));
      }
    })();
  }, []);

  useEffect(() => {
    if (isAuth === false || token === null) {
      return;
    }
    (async function () {
      try {
        setState((prev) => ({
          ...prev,
          loading: true,
        }));
        const data = await getBonuses(token);
        setState((prev) => ({
          ...prev,
          bonuses: data,
        }));
      } catch (error) {
        console.error(error);
      } finally {
        setState((prev) => ({
          ...prev,
          loading: false,
        }));
      }
    })();
  }, [isAuth, token]);

  if (loading === true) {
    return <div>Loading...</div>;
  }

  if (bonuses !== null) {
    return (
      <div className="App">
        <div>{bonuses.currentQuantity} бонусов</div>
        <div>
          {new Date(bonuses.dateBurning).getDate()}/
          {new Date(bonuses.dateBurning).getMonth()} сгорит{" "}
          {bonuses.forBurningQuantity}
        </div>
      </div>
    );
  }
  return <div>No Data</div>;
}

export default App;
