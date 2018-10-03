import { Participant, ParticipantAddedMessage, ParticipantDeletedMessage, ReadyStatusChangedMessage } from '../models/participant.model';


export interface ParticipantAction {
    type: "PARTICIPANT_ADDED" | "PARTICIPANT_REMOVED" | "PARTICIPANT_READY_STATUS_CHANGED" | "PARTICIPANT_ADD_RANGE"
    message: ParticipantAddedMessage & ParticipantDeletedMessage & ReadyStatusChangedMessage & Participant[]
}

export function participantReducer(state: Participant[] = [], action: ParticipantAction) {
    switch (action.type) {
        case "PARTICIPANT_ADDED":
            state.push(action.message.participant);
            return state

        case "PARTICIPANT_REMOVED":
            state = state.filter(s => s.id !== action.message.participantId)
            return state

        case "PARTICIPANT_READY_STATUS_CHANGED":
            let participant = state.find(s => s.id === action.message.participantId)
            if (participant) participant.ready = action.message.newReadyStatus
            return state;

        case "PARTICIPANT_ADD_RANGE":
            state = state.concat(action.message).reduce((ret: Participant[], el) => {
                if (!ret.some(s => s.id === el.id)) { ret.push(el) }
                return ret
            }, [])
        default:
            return state;
    }
}