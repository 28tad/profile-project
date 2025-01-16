import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile: Profile) => {
    const {
        first,
        lastname,
        age,
        country,
    } = profile;

    const erros: ValidateProfileError[] = [];

    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    if (!first || !lastname) {
        erros.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(Number(age))) {
        erros.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        erros.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return erros;
};
