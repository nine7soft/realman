import { put, getContext, apply } from 'redux-saga/effects';
import { SagaCallable } from "react-modx";
import { Types } from '../../types'
import { Category } from "../../../types/models";
import { Player } from '../../../modules/players/types/models';


export const deactivateCategoryTextField: SagaCallable = {
    type: Types.DEACTIVATE_CATEGORY_TEXT_FIELD,
    call: function* ({ payload }: { payload: { category: Category, currentPlayer: Player } }) {
        const realtimeClient: any = yield getContext("realtimeClient");

        yield put({ type: Types.SET_CATEGORY_TEXT_FIELD_TO_INACTIVE, payload });
        // yield apply(realtimeClient, "activateCategoryTextField", [category]);
    }
}