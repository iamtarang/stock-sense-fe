export type Session = {
    id: number;
    session_title: string;
    started_at: string; // ISO date string
    ended_at: string | null; // Can be null if the session is ongoing
    user: number; // Assuming this is a user ID
};

export type ChatMessage = {
    id: number;
    session: number;
    sender: "user" | "bot"; // Assuming sender can be either "user" or "bot"
    message: string;
    created_at: string; // ISO timestamp format
};
