//节点类
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}
// 创建添加节点
const tree = new TreeNode('A');
const nodeB = new TreeNode('B');
const nodeC = new TreeNode('C');
const nodeD = new TreeNode('D');
const nodeE = new TreeNode('E');
const nodeF = new TreeNode('F');
const nodeG = new TreeNode('G');
const nodeH = new TreeNode('H');
const nodeI = new TreeNode('I');
const nodeJ = new TreeNode('J');
tree.children.push(nodeB);
tree.children.push(nodeD);
nodeB.children.push(nodeC);
nodeB.children.push(nodeE);
nodeD.children.push(nodeF);
nodeD.children.push(nodeG);
nodeE.children.push(nodeH);
nodeE.children.push(nodeI);
nodeG.children.push(nodeJ);
// 层次遍历
function printTree(root) {
    if (!root) {
        return '';
    }

    let result = '';
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            result += node.value;

            for (const child of node.children) {
                queue.push(child);
            }
        }
        result += '\n';
    }

    return result;
}
console.log(printTree(tree));