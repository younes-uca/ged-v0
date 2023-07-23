package ma.sir.ged.ws.facade.admin;


import io.minio.ListObjectsArgs;
import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import io.minio.Result;
import io.minio.messages.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/minio")
public class MinioRestAdmin {

    private final MinioClient minioClient;

    @Autowired
    public MinioRestAdmin(MinioClient minioClient) {
        this.minioClient = minioClient;
    }

    @PostMapping("/upload/bucket-name/{bucketName}")
    public String uploadFile(@RequestParam("file") MultipartFile file,@PathVariable String bucketName) {
        try {
            minioClient.putObject(
                    PutObjectArgs.builder()
                            .bucket(bucketName)
                            .object(file.getOriginalFilename())
                            .stream(file.getInputStream(), file.getSize(), -1)
                            .contentType(file.getContentType())
                            .build()
            );

            return "File uploaded successfully!";
        } catch (Exception e) {
            e.printStackTrace();
            return "File upload failed!";
        }
    }

    @GetMapping("/list/bucket-name/{bucketName}")
    public List<String> listDocuments(@PathVariable String bucketName) {
        List<String> documents = new ArrayList<>();
        try {
            Iterable<Result<Item>> results = minioClient.listObjects(
                    ListObjectsArgs.builder().bucket(bucketName).build()
            );

            for (Result<Item> result : results) {
                Item item = result.get();
                documents.add(item.objectName());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return documents;
    }
}
