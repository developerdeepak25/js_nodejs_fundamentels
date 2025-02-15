/**
 ** Objects can't be copies as we would do normal using assign operrator obj1 = obj2 this does noe work rether it passed a reference
 * 
 * * To copy objects there are ways and objexts are copies in two differnt type 
 * * #1 shallow copy
 * * #2 deep copy
 * 
 * * #1 ##### shallow copy #####
 * * - in Shallow copies object are perpectfully copied and not their references but again nested objexts inside the copies obje  are not coppied insted theri ref is passed this is called shallow copy 
 * 
 * * Ways to Create a Shallow Copy:
 * *  -- Spread Operator ({ ...obj })
 * *  -- Object.assign({}, obj)
 * * eg -- const obj1 = { name: "Deepak", skills: { primary: "JS" } };
 * * const obj2 = { ...obj1 };
 * 
 * * #2 ##### deep copy #####
 * * - in deep copy the objexts inside the copied objext are also copied and not their references this is called deep copy. basically each and every thind is copied does not matter level of nesting
 * 
 * * Ways to Create a Deep Copy:
 * * -- JSON.parse(JSON.stringify(obj))
 * * -- Or using custom recurisve logic | or may be a lib
 * 
 * * Eg -- const obj1 = { name: "Deepak", skills: { primary: "JS" } };
 * * const obj2 = JSON.parse(JSON.stringify(obj1));
 * 
 * * FOr custom eg go ti index.js
 * 
 * 
 * 
 * 
 * 
 */