import {Letter} from "../../../../types/models";
import {RealtimeGameClient} from "../../../../services/realtime/RealtimeGameClient";
import {runSaga} from "redux-saga";
import {unselectPlayableLetter} from "../../../../store/game/sagas";


describe("Test unselect letter saga including realtime call", () => {

  it('Unselect letter and send it over realtime', async () => {
    let testLetter: any;
    let testMethodName: any;

    const realtimeConnection: any = {
      send: (methodName: string, letter: Letter) => {
        testLetter = letter;
        testMethodName = methodName;
      }
    };

    const realtimeClient: RealtimeGameClient = new RealtimeGameClient(realtimeConnection);

    const dispatched = [];
    const letter: Letter = {
      value: "A",
      id: "A"
    };

    await runSaga({
      dispatch: (action) => dispatched.push(action),
      context: { realtimeClient }
    }, unselectPlayableLetter.call, { payload: letter }).toPromise();

    expect(testLetter).toEqual(letter);
    expect(testMethodName).toEqual('unselectPlayableLetter');
  });
});
