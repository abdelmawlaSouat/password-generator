export interface AppState {
  characterLength: number;
  includeUppercaseLetters: boolean;
  includeLowercaseLetters: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  password: string;
  strengthStatus?: PasswordStrengthStatus;
}

export enum PasswordStrengthStatus {
  TOO_WEAK = "too weak",
  WEAK = "weak",
  MEDIUM = "medium",
  STRONG = "strong",
}
