/**
 * This program gives you the mean and median
 * for a set of numbers on a .txt file.
 *
 * By:      Huzaifa Khalid
 * Version: 1.0
 * Since:   2022-09-29
 */

// get arguments
//
import { readFileSync } from 'fs'

/**
 * This function calculates the mean (average) value of a set.
 *
 * @param {Array<number>} numberArray Array containing the set.txt file
 * @param {number} quantity The amount of numbers in the array
 * @returns {number} mean The average of all the numbers
 */
function meanCalculation(numberArray: number[], quantity: number): number {
  let mean = 0
  for (let counter = 0; counter < quantity; counter++) {
    mean += numberArray[counter]
  }
  mean /= quantity
  return mean
}

/**
 * This function calculates the median (middle number) in a set.
 *
 * @param {Array<number>} numberArray Array containing the set.txt file
 * @param {number} quantity The amount of numbers in the array
 * @returns {number} median The middle value of all the numbers
 */
function medianCalculation(numberArray: number[], quantity: number): number {
  let median = 0

  const orderedArray = numberArray.sort(function (a, b) {
    return a - b
  })

  if (quantity % 2 === 0) {
    median = (orderedArray[quantity / 2] + orderedArray[(quantity - 1) / 2]) / 2
  } else {
    median = orderedArray[(quantity - 1) / 2]
  }
  return median
}

// Change to desired text file
const filePath = './set2.txt'

// Constants
const numberArray = []
const file = readFileSync(filePath, 'utf8')
const textArray = file.split(/\r?\n/)


console.log('This program calculates the means and media from a txt file.')
console.log(`The current file being used is ${String(filePath)}.\n`)

// Process
for (let counter = 0; counter < textArray.length; counter++) {
  numberArray.push(Number(textArray[counter]))
}
const quantity = numberArray.length

// Run Functions
const mean = meanCalculation(numberArray, quantity)
const median = medianCalculation(numberArray, quantity)

// Output
console.log(`The mean is ${String(mean)}.`)
console.log(`The median is ${String(median)}.`)

console.log('\nDone.')
