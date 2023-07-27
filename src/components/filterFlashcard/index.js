import { flashcard } from '../../database/db';
import { topic } from '../../database/db';
import { getRandomNumber } from '../CreateTopic';

export const filterTopic = topic.filter((el) => {
    if (1 == el.subjectId) {
        return el;
    }
})

const filterFlashcard = []
filterTopic.forEach(filterel => {
    flashcard.forEach(flashel => {
        if (filterel.id === flashel.topicId) {
            filterFlashcard.push(flashel)
        }
    })
});

export const filterarr = []
for (let i = 0; i < 5; i++) {
    filterarr.push(filterFlashcard[getRandomNumber(0, filterFlashcard.length - 1)])
}
console.log(filterarr)