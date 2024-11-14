export default function taskBlock(trueOrFalse) {
  let task = false;  // Utilisation de let
  let task2 = true;  // Utilisation de let

  if (trueOrFalse) {
    let task = true;  // Déclaration d'une nouvelle variable task dans ce bloc
    let task2 = false;  // Déclaration d'une nouvelle variable task2 dans ce bloc
  }

  return [task, task2];  // Ces variables ne seront pas affectées par le bloc if
}

  