import { PasswordStrengthStatus } from "@/components/strengthStatus";

export interface AppState {
  characterLength: number;
  includeUppercaseLetters: boolean;
  includeLowercaseLetters: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  strengthStatus: PasswordStrengthStatus;
}
