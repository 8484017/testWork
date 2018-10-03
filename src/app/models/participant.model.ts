export interface Participant {
    id: string;
    identifier: string;
    ready: boolean;
}

export interface ParticipantAddedMessage {
    messageType: "PARTICIPANT_ADDED";
    participant: Participant;
}

export interface ParticipantDeletedMessage {
    messageType: "PARTICIPANT_REMOVED";
    participantId: string;
}

export interface ReadyStatusChangedMessage {
    messageType: "PARTICIPANT_READY_STATUS_CHANGED";
    participantId: string;
    newReadyStatus: boolean;
}