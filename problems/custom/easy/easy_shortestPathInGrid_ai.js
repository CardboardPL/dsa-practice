/* Problem Description
Problem: Shortest Path in a Grid
Constraints:
- You have a 2D grid of size m x n.
- Each cell is either:
    - 0 -> empty (can walk through)
    - 1 -> obstacle (cannot walk through)
- You start at the top-left cell (0, 0) and want to reach the bottom-right cell (m-1, n-1).
- You can move up, down, left, or right (no diagonals).
- Grid size: 2 <= m <= 10, 2 <= n <= 10

Goal: 
- Find the minimum number of steps to reach the bottom-right cell.
- Return -1 if there's no valid path.
*/

// Import a queue
import { Queue } from '../../../existing_data_structures/Queue.js';

export function shortestPathInAGrid(grid) {
    if (grid[0][0] === 1) return -1;

    const queue = new Queue();
    const visited = new Set().add('0,0');
    queue.enqueue({
        coords: [0,0],
        stepCount: 0
    });

    // Create a helper
    const queueCell = (currRowNumber, currColumnNumber, newStepCount) => {
        if (!visited.has(`${currRowNumber},${currColumnNumber}`)) {
            queue.enqueue({
                coords: [currRowNumber, currColumnNumber],
                stepCount: newStepCount
            });
            visited.add(`${currRowNumber},${currColumnNumber}`);
        }
    }

    // Process each cell
    while(queue.queueSize()) {
        const cellData = queue.dequeue();

        // m = row number, n = column number
        const [m, n] = cellData.coords;

        // Winning Condition (reaching the end)
        if (m === grid.length - 1 && n === grid[0].length - 1) {
            return cellData.stepCount;
        }

        const newStepCount = cellData.stepCount + 1;
        
        // Check Up and Down
        let currRowNumber = m - 1;
        let currColumnNumber = n;

        // Check Up
        if (grid[currRowNumber] != null && grid[currRowNumber][currColumnNumber] === 0) {
            queueCell(currRowNumber, currColumnNumber, newStepCount);
        }

        // Check Down
        currRowNumber = m + 1;
        if (grid[currRowNumber] != null && grid[currRowNumber][currColumnNumber] === 0) {
            queueCell(currRowNumber, currColumnNumber, newStepCount);
        }

        // Check Left and Right
        currRowNumber = m;
        currColumnNumber = n - 1;

        // Check Left
        if (grid[currRowNumber][currColumnNumber] === 0) {
            queueCell(currRowNumber, currColumnNumber, newStepCount);
        }
        
        // Check Right
        currColumnNumber = n + 1;
        if (grid[currRowNumber][currColumnNumber] === 0) {
            queueCell(currRowNumber, currColumnNumber, newStepCount);
        }
    }

    // Winning condition not reached
    return -1;
}

console.log(shortestPathInAGrid([
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0]
]))