const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

let whitelistAddys = [
	'0x58255b471f2714e62794cf024631bfcbdcb9ce5d',
	'0x8db70c886c96b015108fd2d64127b6072c5ec357',
	'0x80fa0c7f3dba17291f027aeae4a45d3a81308d73',
	'0xe6bbc4b09a2dc070df0590475c3976db27c7ba76',
	'0xebbf3f5662c306aaaef82cd2b91f47287c4d0db6',
	'0xcc0794ab6df573e9dc3c2abe930f9eef91b3c3d3',
	'0x9ac32bbb6a5c5af7fda63a275c0b12fcf8500925',
];

// create new array of leafNofed by hashing all whitelist addy indexes using keccak256 then create new tree object using keccak as hashing algo
const leafNodes = whitelistAddys.map((addy) => keccak256(addy));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

// get root hash in hex format
const rootHash = merkleTree.getRoot();

console.log('Whitelist Merkle Tree\n', merkleTree.toString());
