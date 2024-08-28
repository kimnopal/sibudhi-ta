import { atom, useAtom } from "jotai";
import { Submission } from "./data";

type Config = {
    selected: Submission["id"] | null;
};

const configAtom = atom<Config>({
    selected: null,
});

export function useSubmission() {
    return useAtom(configAtom);
}
