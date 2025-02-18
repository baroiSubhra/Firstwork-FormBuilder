import { FormPreviewContainer } from "./views/form-preview";
import { FormBuilderContainer } from "./views/form-builder";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

const App = () => {
  return (
    <div>
      <div className="w-full max-w-md mx-auto space-y-4 px-4 m-4">
        <h2 className="text-2xl text-center font-bold mb-4">Form Builder</h2>
        <Tabs defaultValue="builder" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="builder">Builder</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="builder">
            <FormBuilderContainer />
          </TabsContent>
          <TabsContent value="preview">
            <FormPreviewContainer />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
