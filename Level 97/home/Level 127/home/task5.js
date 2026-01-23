// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

const checkExam = (array1, array2) => {
    let result = array2.reduce(
        (score, answer, i) => {
            if (answer == array1[i]) return score += 4;
            else if (answer == 0) return score += 0;
            else return score - 1;
        }
        , 0);
    return result < 0 ? 0 : result;
}