// https://www.codewars.com/kata/520446778469526ec0000001/train/javascript 

// Return 'true' if and only if 'other' has the same
// nesting structure as 'this'.

function isArray(array) {
    return array.constructor === Array;
  }

// Array.prototype.sameStructureAs = function (other) {
//     if (!isArray(other)) return false;
//     if (this.length != other.length) return false;
  
//     for (let i = 0; i < this.length; i++) {
//       const element      = this[i];
//       const otherElement = other[i];
//       if (isArray(element) && !element.sameStructureAs(otherElement)) {
//         return false;
//       } else if (!isArray(element) && isArray(otherElement)) {
//         return false;
//       }
//     }

 
    Array.prototype.sameStructureAs = function (other) {
        if (!isArray(other)) return false;
        if (this.length != other.length) return false;
      
        return this.every((element, i) => {
          const otherElement = other[i];
          if (isArray(element) && !element.sameStructureAs(otherElement)) {
            return false;
          } else if (!isArray(element) && isArray(otherElement)) {
            return false;
          }
          return true;
        });
      };
 
 
 
 
 
 
 
 
 
 // should return true
 console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ));          
 [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ));  
 
  // should return false 
  console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ));  
  console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] ));  
 
 // should return true
 console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] )); 
 
 // should return false
 console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ));  