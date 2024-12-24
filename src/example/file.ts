File: c:\Users\biuro\Desktop\ext test\kys.ts
Diff:
Index: c:\Users\biuro\Desktop\ext test\kys.ts
===================================================================
--- c:\Users\biuro\Desktop\ext test\kys.ts
+++ c:\Users\biuro\Desktop\ext test\kys.ts
@@ -1,13 +1,12 @@
 async function fetchData(url: string): Promise<any> {
   try {
-      const response = await fetch(url);
-      if (!response.ok) {
-          throw new Error(`HTTP error! status: ${response.status}`);
-      }
-      const data = await response.json();
-      return data;
-  } catch (error) {
+    const response = await fetch(url);
+    if (!response.ok) {
+        throw new Error(`HTTP error! status: ${response.status}`);
+    }
+        const data = await response.json();
+}catch (error) {
       console.error('Fetch error:', error);
       throw new error;
   }
 }
\ No newline at end of file


