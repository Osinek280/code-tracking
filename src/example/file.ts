Index: c:\Users\biuro\Desktop\ext test\kys.ts
    ===================================================================
    --- c:\Users\biuro\Desktop\ext test\kys.ts
    +++ c:\Users\biuro\Desktop\ext test\kys.ts
    @@ -4,9 +4,8 @@
           if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
           }
           const data = await response.json();
    -      console.log('Data fetched:', data);
           return data;
       } catch (error) {
           console.error('Fetch error:', error);
           throw new error;