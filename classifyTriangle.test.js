
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should fulfill (Class A) should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
    });
  
    test('should fulfill (Class E) should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
  
    test('should fulfill (Class D) should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
    });

    /// NEW BVA TEST CASES APPENDED

    /// MAXIMUM (A, B, C)
    test("should compute at the maximum boundary values", () => {
      expect(classifyTriangle(200, 200, 200)).toBe("Equilateral");
    });

    /// MAXIMUM PLUS (A)
    test("should return error for values computed just above the maximum A boundary", () => {
      expect(classifyTriangle(201, 200, 200)).toBe("Error: Input conditions C1, C2, or C3 failed.");
    });

       /// MAXIMUM PLUS (B)
    test("should return error for values computed just above the maximum B boundary", () => {
      expect(classifyTriangle(200, 201, 200)).toBe("Error: Input conditions C1, C2, or C3 failed.");
    });

       /// MAXIMUM PLUS (C)
    test("should return error for values computed just above the maximum C boundary", () => {
      expect(classifyTriangle(200, 200, 201)).toBe("Error: Input conditions C1, C2, or C3 failed.");
    });

    /// MAXIMUM MINUS (A) 
    test("should compute for values computed just below the maximum A boundary", () => {
      expect(classifyTriangle(199, 200, 200)).toBe("Isosceles");
    });

    /// MAXIMUM MINUS (B) 
    test("should compute for values computed just below the maximum B boundary", () => {
      expect(classifyTriangle(200, 199, 200)).toBe("Isosceles");
    });

    /// MAXIMUM MINUS (C) 
    test("should compute for values computed just below the maximum C boundary", () => {
      expect(classifyTriangle(200, 200, 199)).toBe("Isosceles");
    });

    /// NOMINAL (A, B, C)
    test("should compute for nominal values", () => {
      expect(classifyTriangle(100, 100, 100)).toBe("Equilateral");
    });

    /// MINIMUM (A, B, C)
    test("should compute at the minimum boundary A values", () => {
      expect(classifyTriangle(1, 1, 1)).toBe("Equilateral");
    });

    /// MINIMUM PLUS (A)
    test("should compute for values computed just above the minimum A boundary", () => {
      expect(classifyTriangle(2, 1, 1)).toBe("Not a Triangle");
    }); /// This test returns not a triangle due to C4 condition in README.

    /// MINIMUM PLUS (B)
    test("should compute for values computed just above the minimum B boundary", () => {
      expect(classifyTriangle(1, 2, 1)).toBe("Not a Triangle");
    }); /// This test returns not a triangle due to C4 condition in README.

    /// MINIMUM PLUS (C)
    test("should compute for values computed just above the minimum C boundary", () => {
      expect(classifyTriangle(1, 1, 2)).toBe("Not a Triangle");
    }); /// This test returns not a triangle due to C4 condition in README.

    /// MINIMUM MINUS (A)
    test("should return error for values computed just below the minimum A boundary", () => {
      expect(classifyTriangle(0, 1, 1)).toBe("Error: Input conditions C1, C2, or C3 failed.");
    });

     /// MINIMUM MINUS (B)
    test("should return error for values computed just below the minimum B boundary", () => {
      expect(classifyTriangle(1, 0, 1)).toBe("Error: Input conditions C1, C2, or C3 failed.");
    });

     /// MINIMUM MINUS (C)
    test("should return error for values computed just below the minimum C boundary", () => {
      expect(classifyTriangle(1, 1, 0)).toBe("Error: Input conditions C1, C2, or C3 failed.");
    });



    /// NEW ECP TEST CASES APPENDED

    /// CLASS A : EQUILATERAL
    /// CLASS B : ISOSCELES
    /// CLASS C : SCALENE
    /// CLASS D : NOT A TRIANGLE
    /// CLASS E : ERROR RETURNED

    test("should fulfill (Class B), as (a == b || a == c || b == c)", () => {
      expect(classifyTriangle(100, 50, 100)).toBe("Isosceles");
    });

    test("should fulfill (Class C), as a != b != c", () => {
      expect(classifyTriangle(4, 5, 6)).toBe("Scalene");
    });

    /// TESTING CONDITION CLASSES FOR ISOSCELES TRIANGLE
    test("should NOT compute for isosceles triangle due to condition C4", () => {
      expect(classifyTriangle(200, 1, 1)).toBe("Not a Triangle");
    });

    test("should NOT compute for isosceles triangle due to condition C5", () => {
      expect(classifyTriangle(1, 200, 1)).toBe("Not a Triangle");
    });

    test("should NOT compute for isosceles triangle due to condition C6", () => {
      expect(classifyTriangle(1, 1, 200)).toBe("Not a Triangle");
    });

  });
  